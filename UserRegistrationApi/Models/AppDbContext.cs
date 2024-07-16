using Microsoft.EntityFrameworkCore;
using UserRegistrationApi.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasKey(u => u.idUsuarios); // Establece idUsuarios como clave primaria

        modelBuilder.Entity<User>().Property(u => u.idUsuarios).ValueGeneratedOnAdd(); // Configura para autoincremento
    }
}
