namespace Triangles.BLL
{
    public class Triangle : GridShape
    {

        #region Public Properties

        public Coordinate AngleCoordinate { get; set; }
        public Coordinate BottomRightCoordinate { get; set; }
        public Coordinate TopLeftCoordinate { get; set; }

        #endregion Public Properties

        #region Public Methods

        public Triangle AddAngleCoordinate(Coordinate angleCoordinate)
        {
            this.AngleCoordinate = angleCoordinate;
            this.Coordinates.Add(angleCoordinate);

            return this;
        }

        public Triangle AddBottomRightCoordinate(Coordinate bottomRightCoordinate)
        {
            this.BottomRightCoordinate = bottomRightCoordinate;
            this.Coordinates.Add(bottomRightCoordinate);

            return this;
        }

        public Triangle AddTopLeftCoordinate(Coordinate topLeftCoordinate)
        {
            this.TopLeftCoordinate = topLeftCoordinate;
            this.Coordinates.Add(topLeftCoordinate);

            return this;
        }

        #endregion Public Methods

    }
}
