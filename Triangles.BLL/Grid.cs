namespace Triangles.BLL
{
    public class Grid : IGrid
    {
        #region Public Constructors

        public Grid(int cellSize, int height, int width)
        {
            this.CellSize = cellSize;
            this.Height = height;
            this.Width = width;
        }

        #endregion Public Constructors

        #region Public Properties

        public int CellSize { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }

        #endregion Public Properties

        #region Public Methods

        public virtual int GetColumnCount()
        {
            return this.Width / this.CellSize;
        }

        public virtual int GetRowCount()
        {
            return this.Height / this.CellSize;
        }

        #endregion Public Methods
    }
}
