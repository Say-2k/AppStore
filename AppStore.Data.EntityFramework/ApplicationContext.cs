using AppStore.Data.EntityFramework.Models;
using Microsoft.EntityFrameworkCore;
using System;


namespace AppStore.Data.EntityFramework
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            
        }

        public DbSet<App> App { get; set; }
         
        public DbSet<AppHasGenre> AppHasGenre { get; set; }
         
        public DbSet<AppHasLanguage> AppHasLanguage { get; set; }
         
        public DbSet<AppHasPlatform> AppHasPlatform { get; set; }

        public DbSet<AppHasCategory> AppHasCategory { get; set; }

        public DbSet<Category> Category { get; set; }

        public DbSet<Card> Card { get; set; }

        public DbSet<Comment> Comment { get; set; }
         
        public DbSet<Company> Company { get; set; }
         
        public DbSet<CompanyHasDeveloper> CompanyHasDeveloper { get; set; }
         
        public DbSet<Genre> Genre { get; set; }
         
        public DbSet<Language> Language { get; set; }

        public DbSet<Picture> Picture { get; set; }
         
        public DbSet<Platform> Platform { get; set; }

        public DbSet<Pricing> Pricicng { get; set; }
         
        public DbSet<Role> Role { get; set; }
         
        public DbSet<User> User { get; set; }
         
        public DbSet<UserHasApp> UserHasApp { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppHasGenre>(config => config.HasKey("AppId", "GenreId"));
            modelBuilder.Entity<AppHasLanguage>(config => config.HasKey("AppId", "LanguageId"));
            modelBuilder.Entity<AppHasPlatform>(config => config.HasKey("AppId", "PlatformId"));
            modelBuilder.Entity<AppHasCategory>(config => config.HasKey("AppId", "CategoryId"));
            modelBuilder.Entity<CompanyHasDeveloper>(config => config.HasKey("CompanyId", "UserId"));
            modelBuilder.Entity<UserHasApp>(config => config.HasKey("UserId", "AppId"));

        }
    }
}
