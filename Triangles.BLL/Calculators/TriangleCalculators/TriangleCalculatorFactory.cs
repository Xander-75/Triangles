namespace Triangles.BLL.Calculators.TriangleCalculators
{
    public class TriangleCalculatorFactory : ITriangleCalculatorFactory
    {
        #region Public Methods

        public ITriangleCalculator Make(IGridReference gridReference)
        {
            if (gridReference.Column % 2 == 0)
            {
                return new RightTriangleCalculator();
            }
            else
            {
                return new LeftTriangleCalculator();
            }
        }

        #endregion Public Methods
    }
}
