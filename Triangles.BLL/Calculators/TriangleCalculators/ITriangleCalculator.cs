namespace Triangles.BLL.Calculators.TriangleCalculators
{
    public interface ITriangleCalculator
    {

        #region Public Methods

        IGridShape Calculate(IGrid grid, IGridReference gridReference);

        #endregion Public Methods

    }
}
