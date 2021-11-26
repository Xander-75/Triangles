using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Triangles.BLL.Tests
{
    [TestClass]
    public class GridTest
    {

        #region Public Methods

        [TestMethod]
        public void ReturnsCorrectColumnCount()
        {
            Grid grid = new Grid(20, 100, 100);

            Assert.AreEqual(5, grid.GetColumnCount());
        }

        [TestMethod]
        public void ReturnsCorrectRowCount()
        {
            Grid grid = new Grid(20, 100, 100);

            Assert.AreEqual(5, grid.GetRowCount());
        }

        [TestMethod]
        public void ReturnsCorrectWidthAndHeight()
        {
            Grid grid = new Grid(10, 60, 60);

            Assert.AreEqual(10, grid.CellSize);
            Assert.AreEqual(60, grid.Height);
            Assert.AreEqual(60, grid.Width);
        }

        #endregion Public Methods

    }
}
