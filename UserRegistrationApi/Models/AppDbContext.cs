using Microsoft.EntityFrameworkCore;
using UserRegistrationApi.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // clave primaria q te pide ahuevo entityframework
        modelBuilder.Entity<User>().HasKey(u => u.Id);

        // luego si ocupo mas cosas
    }
}
