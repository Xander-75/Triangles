using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Triangles.BLL.Calculators.GridReferenceCalculators;
using Triangles.BLL.Calculators.TriangleCalculators;

namespace Triangles.API
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
            services.AddScoped<TriangleByGridReferenceCalculator>();
            services.AddScoped<ITriangleCalculatorFactory, TriangleCalculatorFactory>();
            services.AddScoped<GridReferenceByTriangleCalculator>();

            services.AddCors(options =>
            {
                options.AddPolicy("_appOrigins",
                builder =>
                {
                    builder.WithOrigins("https://localhost:44303").AllowAnyHeader().AllowAnyMethod();
                });
            });

            services.AddAntiforgery(o => o.HeaderName = "XSRF-TOKEN");
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("_appOrigins");
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
