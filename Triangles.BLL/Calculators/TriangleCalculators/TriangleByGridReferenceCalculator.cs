namespace Triangles.BLL.Calculators.TriangleCalculators
{
    public class TriangleByGridReferenceCalculator
    {
        #region Private Fields

        private readonly ITriangleCalculatorFactory CalculatorFactory;

        #endregion Private Fields

        #region Public Constructors

        public TriangleByGridReferenceCalculator(ITriangleCalculatorFactory calculatorFactory)
        {
            this.CalculatorFactory = calculatorFactory;
        }

        #endregion Public Constructors

        #region Public Methods

        public IGridShape Calculate(IGrid grid, IGridReference gridReference)
        {
            ITriangleCalculator triangleCalculator = this.CalculatorFactory.Make(gridReference);

            return triangleCalculator.Calculate(grid, gridReference);
        }

        #endregion Public Methods
    }
}
