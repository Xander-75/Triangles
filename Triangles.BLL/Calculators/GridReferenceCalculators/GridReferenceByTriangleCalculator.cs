namespace Triangles.BLL.Calculators.GridReferenceCalculators
{
    public class GridReferenceByTriangleCalculator
    {
        #region Public Methods

        public GridReference Calculate(IGrid grid, Triangle triangle)
        {
            Coordinate angleCoordinate = triangle.AngleCoordinate;
            Coordinate topCoordinate = triangle.TopLeftCoordinate;
            //Coordinate bottomCoordinate = triangle.BottomRightCoordinate;

            int row = angleCoordinate.Y / grid.CellSize;

            if (row == 0 || topCoordinate.Y == angleCoordinate.Y)
            {
                row++;
            }

            int column = (angleCoordinate.X / grid.CellSize) * 2;

            if (column == 0 || topCoordinate.X == angleCoordinate.X)
            {
                column++;
            }

            return new GridReference(row, column);
        }

        #endregion Public Methods
    }
}
