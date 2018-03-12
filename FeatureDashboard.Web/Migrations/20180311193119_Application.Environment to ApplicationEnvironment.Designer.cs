﻿// <auto-generated />
using System;
using FeatureDashboard.Web.Core.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;

namespace FeatureDashboard.Web.Migrations
{
    [DbContext(typeof(FeaturesContext))]
    [Migration("20180311193119_Application.Environment to ApplicationEnvironment")]
    partial class ApplicationEnvironmenttoApplicationEnvironment
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.0-preview1-28290")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FeatureDashboard.Web.Pages.Applications.Application", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ApplicationEnvironmentId");

                    b.Property<DateTimeOffset>("DateCreated");

                    b.Property<DateTimeOffset>("DateModified");

                    b.Property<string>("Name");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationEnvironmentId");

                    b.ToTable("Applications");
                });

            modelBuilder.Entity("FeatureDashboard.Web.Pages.Applications.ApplicationEnvironment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsProduction");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("ApplicationEnvironments");
                });

            modelBuilder.Entity("FeatureDashboard.Web.Pages.Applications.Application", b =>
                {
                    b.HasOne("FeatureDashboard.Web.Pages.Applications.ApplicationEnvironment", "ApplicationEnvironment")
                        .WithMany()
                        .HasForeignKey("ApplicationEnvironmentId");
                });
#pragma warning restore 612, 618
        }
    }
}