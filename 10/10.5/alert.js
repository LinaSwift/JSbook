let message = (login = "сотрудник")
  ? (message = "привет")
  : (login = "Директор")
  ? (message = "здравствуйте")
  : (login = " ")
  ? (message = "нет логина")
  : (message = " ");
