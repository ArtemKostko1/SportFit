using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SportFit.Data.Entities
{
    public class SportFitContext : DbContext
    {
        public SportFitContext(DbContextOptions<SportFitContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Like>()
                .HasOne(l => l.User)
                .WithMany(u => u.Likes)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Like>()
                .HasOne(l => l.Program)
                .WithMany(p => p.Likes)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Comment>()
                .HasOne(c => c.User)
                .WithMany(u => u.Comments)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Comment>()
                .HasOne(c => c.Program)
                .WithMany(p => p.Comments)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SelectedProgram>()
                .HasOne(s => s.User)
                .WithMany(u => u.SelectedPrograms)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SelectedProgram>()
                .HasOne(s => s.Program)
                .WithMany(p => p.SelectedPrograms)
                .OnDelete(DeleteBehavior.Restrict);
            
            base.OnModelCreating(modelBuilder);

            BaseFillTables(modelBuilder);
        }

        private void BaseFillTables (ModelBuilder modelBuilder)
		{
            modelBuilder.Entity<ProgramType>().HasData(
                new ProgramType
                {
                    Id = Guid.NewGuid(),
                    Name = "Training program"
                },
                new ProgramType
                {
                    Id = Guid.NewGuid(),
                    Name = "Meal plan"
                }
            );

            modelBuilder.Entity<ComplexityLevel>().HasData(
                new ComplexityLevel
                {
                    Id = Guid.NewGuid(),
                    Name = "Professional"
                },
                new ComplexityLevel
                {
                    Id = Guid.NewGuid(),
                    Name = "Hard"
                },
                new ComplexityLevel
                {
                    Id = Guid.NewGuid(),
                    Name = "Medium"
                },
                new ComplexityLevel
                {
                    Id = Guid.NewGuid(),
                    Name = "Easy"
                }
            );
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Program> Programs { get; set; }
        public DbSet<ProgramType> ProgramTypes { get; set; }
        public DbSet<ComplexityLevel> ComplexityLevels { get; set; }
        public DbSet<ProgramTag> ProgramTags { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<SelectedProgram> SelectedPrograms { get; set; }
        
        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }
    }
}