using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SportFit.Data.Entities;
using SportFit.Helpers;
using SportFit.Services;
using System.IO;

namespace SportFit
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}
        public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<SportFitContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("DevConnection")));
            
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            
            services.AddScoped(typeof(IEfRepository<>), typeof(UserRepository<>));
            
            services.AddAutoMapper(typeof(UserProfile));
            services.AddControllers();
			services.AddCors();
            
            services.AddScoped<IUserService, UserService>();

			// In production, the React files will be served from this directory
			services.AddSpaStaticFiles(configuration =>
			{
				configuration.RootPath = "ClientApp/build";
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
            app.UseRouting();
            app.UseHttpsRedirection();
			//app.UseDefaultFiles();
			app.UseStaticFiles();
			app.UseSpaStaticFiles();
            app.UseDeveloperExceptionPage();
            app.UseStatusCodePages();
            
			app.UseCors(options =>
				options.WithOrigins("http://localhost:5000")
					.AllowAnyHeader()
					.AllowAnyMethod());
            
            app.UseMiddleware<JwtMiddleware>();

            if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
			}

            app.UseEndpoints(x => x.MapControllers());

			/*app.Run(async (context) =>
			{
				context.Response.ContentType = "text/html";
				await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
			});*/
			app.UseSpa(spa =>
			{
			    spa.Options.SourcePath = "ClientApp";

			    if (env.IsDevelopment())
			    {
			        spa.UseReactDevelopmentServer(npmScript: "start");
			    }
			});
		}
	}
}
