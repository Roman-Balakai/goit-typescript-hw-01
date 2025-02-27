type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T>(initialValues: Partial<T>) {}

createOrUpdateUser<User>({
  email: "user@mail.com",
  password: "password123",
});
