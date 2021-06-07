﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SportFit.Data.Entities;

namespace SportFit.Migrations
{
    [DbContext(typeof(SportFitContext))]
    partial class SportFitContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SportFit.Data.Entities.Comment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("SportFit.Data.Entities.ComplexityLevel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ComplexityLevels");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Like", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.HasIndex("UserId");

                    b.ToTable("Likes");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Program", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ComplexityLevelId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(300)");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PreView")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("ProgramTypeId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ComplexityLevelId");

                    b.HasIndex("ProgramTypeId");

                    b.HasIndex("UserId");

                    b.ToTable("Programs");
                });

            modelBuilder.Entity("SportFit.Data.Entities.ProgramTag", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("TagId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.HasIndex("TagId");

                    b.ToTable("ProgramTags");
                });

            modelBuilder.Entity("SportFit.Data.Entities.ProgramType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ProgramTypes");
                });

            modelBuilder.Entity("SportFit.Data.Entities.SelectedProgram", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.HasIndex("UserId");

                    b.ToTable("SelectedPrograms");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Tag", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("SportFit.Data.Entities.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Avatar")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Instagram")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("MobilePhone")
                        .HasColumnType("nvarchar(16)");

                    b.Property<DateTime?>("ModificationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nickname")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Vk")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Comment", b =>
                {
                    b.HasOne("SportFit.Data.Entities.Program", "Program")
                        .WithMany("Comments")
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("SportFit.Data.Entities.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Program");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Like", b =>
                {
                    b.HasOne("SportFit.Data.Entities.Program", "Program")
                        .WithMany("Likes")
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("SportFit.Data.Entities.User", "User")
                        .WithMany("Likes")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Program");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Program", b =>
                {
                    b.HasOne("SportFit.Data.Entities.ComplexityLevel", "ComplexityLevel")
                        .WithMany("Programs")
                        .HasForeignKey("ComplexityLevelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SportFit.Data.Entities.ProgramType", "ProgramType")
                        .WithMany("Programs")
                        .HasForeignKey("ProgramTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SportFit.Data.Entities.User", "User")
                        .WithMany("Programs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ComplexityLevel");

                    b.Navigation("ProgramType");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SportFit.Data.Entities.ProgramTag", b =>
                {
                    b.HasOne("SportFit.Data.Entities.Program", "Program")
                        .WithMany()
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SportFit.Data.Entities.Tag", "Tag")
                        .WithMany("ProgramTags")
                        .HasForeignKey("TagId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Program");

                    b.Navigation("Tag");
                });

            modelBuilder.Entity("SportFit.Data.Entities.SelectedProgram", b =>
                {
                    b.HasOne("SportFit.Data.Entities.Program", "Program")
                        .WithMany("SelectedPrograms")
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("SportFit.Data.Entities.User", "User")
                        .WithMany("SelectedPrograms")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Program");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Tag", b =>
                {
                    b.HasOne("SportFit.Data.Entities.Program", null)
                        .WithMany("Tags")
                        .HasForeignKey("ProgramId");
                });

            modelBuilder.Entity("SportFit.Data.Entities.ComplexityLevel", b =>
                {
                    b.Navigation("Programs");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Program", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Likes");

                    b.Navigation("SelectedPrograms");

                    b.Navigation("Tags");
                });

            modelBuilder.Entity("SportFit.Data.Entities.ProgramType", b =>
                {
                    b.Navigation("Programs");
                });

            modelBuilder.Entity("SportFit.Data.Entities.Tag", b =>
                {
                    b.Navigation("ProgramTags");
                });

            modelBuilder.Entity("SportFit.Data.Entities.User", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Likes");

                    b.Navigation("Programs");

                    b.Navigation("SelectedPrograms");
                });
#pragma warning restore 612, 618
        }
    }
}
