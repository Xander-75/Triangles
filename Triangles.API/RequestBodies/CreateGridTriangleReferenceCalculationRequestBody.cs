using System;
using System.ComponentModel.DataAnnotations;

namespace Triangles.API.RequestBodies
{
    public class CreateGridTriangleReferenceCalculationRequestBody
    {
        #region Public Properties

        [Required]
        [Range(1, 200)]
        public int CellSize { get; set; }

        [Required]
        [Range(1, 1000)]
        public int GridHeight { get; set; }

        [Required]
        [Range(1, 1000)]
        public int GridWidth { get; set; }

        [Required]
        [Range(0, 1000)]
        public int V1X { get; set; }

        [Required]
        [Range(0, 1000)]
        public int V1Y { get; set; }

        [Required]
        [Range(0, 1000)]
        public int V2X { get; set; }

        [Required]
        [Range(0, 1000)]
        public int V2Y { get; set; }

        [Required]
        [Range(0, 1000)]
        public int V3X { get; set; }

        [Required]
        [Range(0, 1000)]
        public int V3Y { get; set; }

        #endregion Public Properties
    }
}
