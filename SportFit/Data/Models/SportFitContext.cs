using Microsoft.EntityFrameworkCore;

namespace SportFit.Data.Models
{
    public class SportFitContext : DbContext
    {
        public SportFitContext(DbContextOptions<SportFitContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Program> Programs { get; set; }
        public DbSet<ProgramType> ProgramTypes { get; set; }
        public DbSet<ComplexityLevel> ComplexityLevels { get; set; }
        public DbSet<ProgramTag> ProgramTags { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<SelectedProgram> SelectedPrograms { get; set; }
    }
}