namespace Triangles.BLL
{
    public interface IGrid
    {

        #region Public Properties

        int CellSize { get; set; }
        int Height { get; set; }
        int Width { get; set; }

        #endregion Public Properties

        #region Public Methods

        int GetColumnCount();
        int GetRowCount();

        #endregion Public Methods

    }
}
