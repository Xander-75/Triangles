namespace Triangles.BLL.Calculators.TriangleCalculators
{
    public interface ITriangleCalculatorFactory
    {

        #region Public Methods

        ITriangleCalculator Make(IGridReference gridReference);

        #endregion Public Methods

    }
}
