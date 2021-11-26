using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Triangles.BLL.Tests
{
    [TestClass]
    public class GridReferenceTests
    {

        #region Public Methods

        [TestMethod]
        public void ReturnsRowAndColumn()
        {
            GridReference gridReference = new GridReference('C', 5);

            Assert.AreEqual('C', gridReference.Row);
            Assert.AreEqual(5, gridReference.Column);
        }

        [TestMethod]
        public void ReturnsNumericRowForC()
        {
            GridReference gridReference = new GridReference('C', 5);

            Assert.AreEqual(3, gridReference.GetNumericRow());
        }

        #endregion Public Methods

    }
}
