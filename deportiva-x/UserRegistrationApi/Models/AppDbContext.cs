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
        public DbSet<CarritoItems> CarritoItems { get; set; }
        public DbSet<Carrito> Carrito { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasKey(u => u.idUsuarios);
            modelBuilder.Entity<User>().Property(u => u.idUsuarios).ValueGeneratedOnAdd();

            modelBuilder.Entity<Product>().ToTable("productos");
            modelBuilder.Entity<Product>().HasKey(p => p.idProductos);
            modelBuilder.Entity<Product>().Property(p => p.idProductos).ValueGeneratedOnAdd();
            modelBuilder.Entity<Product>().Property(p => p.Precio).HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Product>()
                .Property(p => p.TallaDb)
                .HasColumnName("Talla");

            modelBuilder.Entity<UserWishlist>().HasKey(uw => uw.Id);
            modelBuilder
                .Entity<UserWishlist>()
                .HasOne(uw => uw.User)
                .WithMany(u => u.Wishlists)
                .HasForeignKey(uw => uw.idUsuario);

            modelBuilder
                .Entity<UserWishlist>()
                .HasOne(uw => uw.Product)
                .WithMany(p => p.Wishlists)
                .HasForeignKey(uw => uw.idProducto);

            modelBuilder.Entity<Carrito>().HasKey(c => c.idCarrito);
            modelBuilder.Entity<CarritoItems>().HasKey(ci => ci.idCarritoItems);

            modelBuilder.Entity<CarritoItems>()
                .Property(ci => ci.idCarritoItems)
                .ValueGeneratedOnAdd(); // Configura idCarritoItems como columna de identidad

            modelBuilder.Entity<CarritoItems>()
                .HasOne(ci => ci.Carrito)
                .WithMany(c => c.CarritoItems)
                .HasForeignKey(ci => ci.idCarrito);

            modelBuilder.Entity<CarritoItems>()
                .HasOne(ci => ci.Productos)
                .WithMany(p => p.CarritoItems)
                .HasForeignKey(ci => ci.idProductos);

            modelBuilder.Entity<Carrito>()
                .Property(c => c.idUsuarios)
                .HasColumnName("idUsuarios");

            modelBuilder.Entity<Carrito>()
                .Property(c => c.UseridUsuarios)
                .HasColumnName("UseridUsuarios");

            modelBuilder.Entity<Order>()
                .HasMany(o => o.OrderItems)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId);

            modelBuilder.Entity<Order>()
                .HasMany(o => o.OrderItems)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId);
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
