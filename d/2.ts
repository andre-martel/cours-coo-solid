type Order = {
  id?: string;
};

class OrderService {
  database: MySQLDatabase;

  // constructor

  save(order: Order): void {
    if (order.id === undefined) {
      this.database.insert(order);
    } else {
      this.database.update(order);
    }
  }
}

class MySQLDatabase {
  insert(order: Order) {
    // insert
  }

  update(order: Order) {
    // update
  }
}
