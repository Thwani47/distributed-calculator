## distributed-calculator
This is a demo project to demonstrate microservices architecture. The project is a simple calculator in which operation is managed by a separate service. The services are written in different languages:
- **calculator** - This is a React application which is the front-end of the project. The calculator state is stored in a MySQL database.
- **go-subtractor** - This is a Go service which subtracts two numbers.
- **csharp-adder** - This is a C# service which adds two numbers.
- **python-multiplier** - This is a Python service which multiplies two numbers.
- **express-divider** - This is a Node.js service which divides two numbers.

Here's a high-level architecture of the project:
![Architecture](./assets/distributed_calculator_arch.png)

## How to run the project