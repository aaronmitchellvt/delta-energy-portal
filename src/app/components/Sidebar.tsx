"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const devUrl = process.env.NEXT_PUBLIC_BASE_URL;
const Sidebar = () => {
  console.log("URL:: ", devUrl);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get(`${devUrl}/api/properties`);
      setLoading(false);
      setProjects(data.projectList);
      return data;
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-full w-60 border-r bg-gray-200">
      <Link href="/properties/new">
        <p className="block p-4 text-xl text-blue-500">+ New Property</p>
      </Link>

      <hr />

      {loading && <div className="p-3">Loading...</div>}
      {projects.length === 0 && !loading && (
        <p className="p-4">No projects yet</p>
      )}

      {!loading && projects.length > 0 && (
        <ol>
          {projects.map((project: any) => (
            <Link key={project.id} href={`/properties/${project.id}`}>
              <li
                key={project.projName}
                className="text-black block border-b p-4 text-xl"
              >
                🏠 {project.projName}
              </li>
            </Link>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Sidebar;
