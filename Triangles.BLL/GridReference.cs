using System;
using System.Linq;

namespace Triangles.BLL
{
    public class GridReference : IGridReference
    {

        #region Public Constructors

        public GridReference(string reference)
        {
            this.Row = reference.ToCharArray().First();
            this.Column = int.Parse(reference.Substring(1));
        }

        public GridReference(char row, int column)
        {
            this.Row = char.ToUpper(row);
            this.Column = column;
        }

        public GridReference(int row, int column)
        {
            this.Row = this.NumberToAlphabet(row);
            this.Column = column;
        }

        #endregion Public Constructors

        #region Public Properties

        public int Column { get; set; }
        public char Row { get; set; }

        #endregion Public Properties

        #region Public Methods

        public int GetNumericRow()
        {
            int rowCharacterCode = this.Row;

            return rowCharacterCode - 64;
        }

        public char NumberToAlphabet(int number)
        {
            return (Char)(64 + number);
        }

        #endregion Public Methods

    }
}
