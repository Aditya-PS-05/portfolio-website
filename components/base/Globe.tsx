// "use client"; // Next.js client component
// import React, { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";
// import "@/app/globals.css";

// // Type definition for the Globe component's props
// interface GlobeProps {
//   size: number;
// }

// // Your location coordinates (latitude and longitude) for Tiruchirappalli, Tamil Nadu, India
// const userLocation = { lat: 10.7905, lon: 78.7047 };

// const Globe: React.FC<GlobeProps> = ({ size }) => {
//   const [geoJson, setGeoJson] =
//     useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | null>(null);
//   const [rotation, setRotation] = useState<number>(-userLocation.lon); // Center the globe on your longitude
//   const [isRotating, setIsRotating] = useState<boolean>(false); // Track whether the globe is rotating
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   useEffect(() => {
//     // Fetch the GeoJSON data
//     d3.json("/data/custom.geo.json")
//       .then((data: any) => {
//         if (data && isFeatureCollection(data)) {
//           setGeoJson(data);
//         } else {
//           console.error("Data is not a valid FeatureCollection");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching the GeoJSON data:", error);
//       });
//   }, []);

//   const isFeatureCollection = (
//     obj: unknown,
//   ): obj is GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
//     return (
//       typeof obj === "object" &&
//       obj !== null &&
//       "type" in obj &&
//       (obj as GeoJSON.FeatureCollection<GeoJSON.Geometry>).type ===
//         "FeatureCollection" &&
//       "features" in obj
//     );
//   };

//   useEffect(() => {
//     if (geoJson && svgRef.current) {
//       const svg = d3.select(svgRef.current);

//       // Set up the projection and rotate the globe
//       const projection = d3
//         .geoOrthographic()
//         .fitSize([size, size], geoJson)
//         .rotate([rotation, -userLocation.lat]) // Rotate based on user latitude
//         .clipAngle(90); // Clip to show only the front half of the globe

//       // Set up the geo path generator
//       const geoGenerator = d3.geoPath().projection(projection);
//       const pathString = geoGenerator(geoJson);

//       // Clear previous paths and draw the new one
//       svg.selectAll("path").remove();
//       svg
//         .append("path")
//         .attr("d", pathString || "")
//         .attr("fill", "#aaa")
//         .attr("stroke", "#ddd")
//         .attr("stroke-width", 0.5);

//       // Mark user location with a red dot if it is visible
//       const userPoint = projection([userLocation.lon, userLocation.lat]); // Convert to projection coordinates
//       if (
//         userPoint &&
//         userPoint[0] !== undefined &&
//         userPoint[1] !== undefined
//       ) {
//         const [x, y] = userPoint;
//         const isVisible = x >= 0 && x <= size && y >= 0 && y <= size; // Check if within the visible area
//         svg.selectAll("circle").remove();
//         if (isVisible && !isRotating) {
//           svg
//             .append("circle")
//             .attr("cx", x)
//             .attr("cy", y)
//             .attr("r", 3)
//             .attr("fill", "red");
//         }
//       }

//       // Add drag functionality for user interaction
//       const drag = d3
//         .drag<SVGSVGElement, unknown>()
//         .on("start", () => {
//           setIsRotating(true); // Stop the rotation when the user starts dragging
//         })
//         .on("drag", (event) => {
//           const dx = event.dx;
//           setRotation((prevRotation) => prevRotation + dx * 0.1); // Adjust sensitivity as needed
//         })
//         .on("end", () => {
//           setIsRotating(false); // Resume rotation after the user stops dragging
//         });

//       svg.call(drag);
//     }
//   }, [geoJson, rotation, size, isRotating]);

//   useEffect(() => {
//     // Animation frame function for continuous rotation
//     if (!isRotating) {
//       const animate = () => {
//         setRotation((prevRotation) => prevRotation + 0.5); // Increased speed
//         requestAnimationFrame(animate);
//       };
//       animate();
//     }
//   }, [isRotating]);

//   // Stop rotation after a few seconds to focus on the user location
//   useEffect(() => {
//     const timeoutId = setTimeout(() => setIsRotating(false), 3000); // Stop rotation after 3 seconds
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <div id="wrapper" className="w-[600px] m-auto mt-5">
//       <svg ref={svgRef} width={size} height={size}></svg>
//     </div>
//   );
// };

// export default Globe;

"use client"; // Next.js client component
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "@/app/globals.css";

// Type definition for the Globe component's props
interface GlobeProps {
  size: number;
}

// Your location coordinates (latitude and longitude) for Tiruchirappalli, Tamil Nadu, India
const userLocation = { lat: 10.7905, lon: 78.7047 };

const Globe: React.FC<GlobeProps> = ({ size }) => {
  const [geoJson, setGeoJson] =
    useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | null>(null);
  const [rotation, setRotation] = useState<number>(-userLocation.lon); // Center the globe on your longitude
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Fetch the GeoJSON data
    d3.json("/data/custom.geo.json")
      .then((data: any) => {
        if (data && isFeatureCollection(data)) {
          setGeoJson(data);
        } else {
          console.error("Data is not a valid FeatureCollection");
        }
      })
      .catch((error) => {
        console.error("Error fetching the GeoJSON data:", error);
      });
  }, []);

  const isFeatureCollection = (
    obj: unknown,
  ): obj is GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "type" in obj &&
      (obj as GeoJSON.FeatureCollection<GeoJSON.Geometry>).type ===
        "FeatureCollection" &&
      "features" in obj
    );
  };

  useEffect(() => {
    if (geoJson && svgRef.current) {
      const svg = d3.select(svgRef.current);

      // Set up the projection and rotate the globe
      const projection = d3
        .geoOrthographic()
        .fitSize([size, size], geoJson)
        .rotate([rotation, -userLocation.lat]) // Rotate based on user latitude
        .clipAngle(90); // Clip to show only the front half of the globe

      // Set up the geo path generator
      const geoGenerator = d3.geoPath().projection(projection);
      const pathString = geoGenerator(geoJson);

      // Clear previous paths and draw the new one
      svg.selectAll("path").remove();
      svg
        .append("path")
        .attr("d", pathString || "")
        .attr("fill", "#aaa")
        .attr("stroke", "#ddd")
        .attr("stroke-width", 0.5);

      // Mark user location with a red dot if it is visible
      const userPoint = projection([userLocation.lon, userLocation.lat]); // Convert to projection coordinates
      if (
        userPoint &&
        userPoint[0] !== undefined &&
        userPoint[1] !== undefined
      ) {
        const [x, y] = userPoint;
        const isVisible = x >= 0 && x <= size && y >= 0 && y <= size; // Check if within the visible area
        svg.selectAll("circle").remove();
        if (isVisible) {
          svg
            .append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 3)
            .attr("fill", "red");
        }
      }

      // Add drag functionality for user interaction
      const drag = d3.drag<SVGSVGElement, unknown>().on("drag", (event) => {
        const dx = event.dx;
        setRotation((prevRotation) => prevRotation + dx * 0.1); // Adjust sensitivity as needed
      });

      svg.call(drag);
    }
  }, [geoJson, rotation, size]);

  return (
    <div id="wrapper" className="w-[600px] m-auto mt-5">
      <svg ref={svgRef} width={size} height={size}></svg>
    </div>
  );
};

export default Globe;
