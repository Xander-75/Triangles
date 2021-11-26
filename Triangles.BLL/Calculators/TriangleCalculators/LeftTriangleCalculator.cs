namespace Triangles.BLL.Calculators.TriangleCalculators
{
    public class LeftTriangleCalculator : ITriangleCalculator
    {

        #region Public Methods

        public IGridShape Calculate(IGrid grid, IGridReference gridReference)
        {
            int leftX = ((gridReference.Column - 1) * grid.CellSize) / 2;
            int bottomY = gridReference.GetNumericRow() * grid.CellSize;

            int topLeftY = (gridReference.GetNumericRow() - 1) * grid.CellSize;

            int bottomRightX = leftX + grid.CellSize;

            return new GridShape()
                .AddCoordinate(new Coordinate(leftX, topLeftY))
                .AddCoordinate(new Coordinate(leftX, bottomY))
                .AddCoordinate(new Coordinate(bottomRightX, bottomY));
        }

        #endregion Public Methods

    }
}
