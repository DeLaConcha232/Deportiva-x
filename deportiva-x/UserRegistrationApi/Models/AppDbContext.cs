using Microsoft.EntityFrameworkCore;
using UserRegistrationApi.Models;

namespace UserRegistrationApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasKey(u => u.idUsuarios);
            modelBuilder.Entity<User>().Property(u => u.idUsuarios).ValueGeneratedOnAdd();

            modelBuilder.Entity<Product>().ToTable("productos");
            modelBuilder.Entity<Product>().HasKey(p => p.idProductos);
            modelBuilder.Entity<Product>().Property(p => p.idProductos).ValueGeneratedOnAdd();
            modelBuilder.Entity<Product>().Property(p => p.Precio).HasColumnType("decimal(18,2)");

            modelBuilder
                .Entity<Product>()
                .Property(p => p.Talla)
                .HasConversion(
                    v => string.Join(',', v),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()
                );
        }
    }
}
