using System.Collections.Generic;

namespace Triangles.BLL
{
    public interface IGridShape
    {

        #region Public Properties

        IList<Coordinate> Coordinates { get; }

        #endregion Public Properties

        #region Public Methods

        IGridShape AddCoordinate(Coordinate coordinate);

        #endregion Public Methods

    }
}
