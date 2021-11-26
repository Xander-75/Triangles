using System.Collections.Generic;

namespace Triangles.BLL
{
    public class GridShape : IGridShape
    {

        #region Public Fields

        public List<Coordinate> Coordinates = new List<Coordinate>();

        #endregion Public Fields

        #region Public Properties

        IList<Coordinate> IGridShape.Coordinates { get => Coordinates; }

        #endregion Public Properties

        #region Public Methods

        public IGridShape AddCoordinate(Coordinate coordinate)
        {
            this.Coordinates.Add(coordinate);

            return this;
        }

        #endregion Public Methods

    }
}
