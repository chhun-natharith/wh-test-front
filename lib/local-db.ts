export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class LocalDB<T extends { id: string }> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  private getItems(): T[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  private saveItems(items: T[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  async getAll(): Promise<T[]> {
    await delay(500); // Simulate network delay
    return this.getItems();
  }

  async getById(id: string): Promise<T | undefined> {
    await delay(300);
    return this.getItems().find((item) => item.id === id);
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    await delay(500);
    const items = this.getItems();
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as unknown as T;
    
    this.saveItems([...items, newItem]);
    return newItem;
  }

  async update(id: string, updates: Partial<T>): Promise<T> {
    await delay(500);
    const items = this.getItems();
    const index = items.findIndex((item) => item.id === id);
    
    if (index === -1) throw new Error(`Item with id ${id} not found`);
    
    const updatedItem = {
      ...items[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    items[index] = updatedItem;
    this.saveItems(items);
    return updatedItem;
  }

  async delete(id: string): Promise<void> {
    await delay(500);
    const items = this.getItems();
    const newItems = items.filter((item) => item.id !== id);
    this.saveItems(newItems);
  }
}
