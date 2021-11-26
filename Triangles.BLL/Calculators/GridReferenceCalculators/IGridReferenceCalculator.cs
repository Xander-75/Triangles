namespace Triangles.BLL.Calculators.GridReferenceCalculators
{
    public interface IGridReferenceCalculator
    {
        #region Public Methods

        IGridShape Calculate(IGrid grid, IGridShape gridShape);

        #endregion Public Methods
    }
}
