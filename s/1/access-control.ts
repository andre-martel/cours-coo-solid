type Permission = {
  id: string;
  authorizedRoles: UserRole[];
};

enum UserRole {
  ADMIN = "admin",
  WRITER = "writer",
}

export class AccessControl {
  public checkPermission(permission: Permission, role: UserRole): boolean {
    return permission.authorizedRoles.includes(role);
  }
}
