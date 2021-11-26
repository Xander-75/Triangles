namespace Triangles.BLL
{
    public interface IGridReference
    {

        #region Public Properties

        int Column { get; set; }
        char Row { get; set; }

        #endregion Public Properties

        #region Public Methods

        int GetNumericRow();

        #endregion Public Methods

    }
}
