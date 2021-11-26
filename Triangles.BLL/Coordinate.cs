namespace Triangles.BLL
{
    public class Coordinate
    {

        #region Public Constructors

        public Coordinate(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }

        #endregion Public Constructors

        #region Public Properties

        public int X { get; set; }
        public int Y { get; set; }

        #endregion Public Properties

    }
}
