using Microsoft.EntityFrameworkCore;

namespace UserRegistrationApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<UserWishlist> UserWishlist { get; set; }

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

            modelBuilder.Entity<UserWishlist>().HasKey(uw => uw.Id);
            modelBuilder
                .Entity<UserWishlist>()
                .HasOne(uw => uw.User)
                .WithMany(u => u.Wishlists) // Propiedad de navegación configurada correctamente
                .HasForeignKey(uw => uw.idUsuario);

            modelBuilder
                .Entity<UserWishlist>()
                .HasOne(uw => uw.Product)
                .WithMany(p => p.Wishlists) // Propiedad de navegación configurada correctamente
                .HasForeignKey(uw => uw.idProducto);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost,1433;Database=Deportivax3;User ID=sa;Password=TuContraseña123;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;");
            }
        }

    }
}
