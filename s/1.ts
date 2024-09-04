type Permission = {
  id: string;
  authorizedRoles: UserRole[];
};

enum UserRole {
  ADMIN = "admin",
  WRITER = "writer",
}

class User {
  public name: string;

  public firstname: string;

  constructor(name: string, firstname: string) {
    this.name = name;
    this.firstname = firstname;
  }

  public checkPermission(permission: Permission, role: UserRole): boolean {
    return permission.authorizedRoles.includes(role);
  }

  public updateUserInDB(id: string, _user: User) {
    console.log("Update informations of user", id);
  }

  public authenticateUser(_token: string, _user: User) {
    console.log("Request authentication to Auth provider");
  }
}
