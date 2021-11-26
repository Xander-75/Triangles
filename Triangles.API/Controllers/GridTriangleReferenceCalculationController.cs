using Microsoft.AspNetCore.Mvc;
using Triangles.API.RequestBodies;
using Triangles.BLL;
using Triangles.BLL.Calculators.GridReferenceCalculators;

namespace Triangles.API.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class GridTriangleReferenceCalculationController : Controller
    {
        #region Private Fields

        private readonly GridReferenceByTriangleCalculator Calculator;

        #endregion Private Fields

        #region Public Constructors

        public GridTriangleReferenceCalculationController()
        {
            this.Calculator = new GridReferenceByTriangleCalculator();
        }

        #endregion Public Constructors

        #region Public Methods

        // POST: api/GridTriangleReferenceCalculation
        [HttpPost]
        public JsonResult Post([FromBody] CreateGridTriangleReferenceCalculationRequestBody request)
        {
            Grid grid = new Grid(request.CellSize, request.GridHeight, request.GridWidth);

            Triangle triangle = new Triangle()
                .AddAngleCoordinate(new Coordinate(request.V1X, request.V1Y))
                .AddTopLeftCoordinate(new Coordinate(request.V2X, request.V2Y))
                .AddBottomRightCoordinate(new Coordinate(request.V3X, request.V3Y));

            IGridReference gridReference = this.Calculator.Calculate(grid, triangle);

            return Json(gridReference);
        }

        #endregion Public Methods
    }
}
