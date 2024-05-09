using CSharpAdder.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGet("/", () => "Welcome to the CSharp Adder API")
    .WithName("Home")
    .WithOpenApi();

app.MapGet("/health", () => "Heatlthy").WithName("HealthCheck").WithOpenApi();

app.MapPost("/add", (AddRequest request) =>
{
    var response = new AddResponse
    {
        Sum = request.FirstNumber + request.SecondNumber
    };

    return Results.Ok(response);
}).WithName("Add").WithOpenApi();

app.Run();