type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partical<User>) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
