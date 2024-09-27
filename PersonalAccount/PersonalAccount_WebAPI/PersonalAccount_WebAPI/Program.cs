using Account.BLL.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddContext(builder.Configuration.GetConnectionString("SqliteConnection")!);
builder.Services.AddServiceAccount();


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

;


var app = builder.Build();


app.UseCors(builder => builder.WithOrigins("http://localhost:4200").
AllowAnyHeader().
AllowAnyMethod().
AllowCredentials());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
