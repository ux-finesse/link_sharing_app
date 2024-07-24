// components/LinkManager.tsx
import { useState } from "react";

interface Link {
  id: number;
  platform: string;
  url: string;
}

const platforms = ["GitHub", "Twitter", "LinkedIn"];

const LinkManager = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [platform, setPlatform] = useState(platforms[0]);
  const [url, setUrl] = useState("");
  const [editingLink, setEditingLink] = useState<Link | null>(null);

  const handleAddLink = () => {
    if (!url) return;
    const newLink = {
      id: Date.now(),
      platform,
      url,
    };
    setLinks([...links, newLink]);
    setUrl("");
    setPlatform(platforms[0]);
  };

  const handleUpdateLink = () => {
    if (!editingLink) return;
    setLinks(
      links.map((link) =>
        link.id === editingLink.id ? { ...link, platform, url } : link
      )
    );
    setEditingLink(null);
    setUrl("");
    setPlatform(platforms[0]);
  };

  const handleEditLink = (link: Link) => {
    setEditingLink(link);
    setUrl(link.url);
    setPlatform(link.platform);
  };

  const handleDeleteLink = (id: number) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Link Manager</h1>
      <div className="mb-4">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="border p-2 mr-2"
        >
          {platforms.map((plat) => (
            <option key={plat} value={plat}>
              {plat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 mr-2"
        />
        {editingLink ? (
          <button
            onClick={handleUpdateLink}
            className="bg-yellow-500 text-white p-2"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAddLink}
            className="bg-blue-500 text-white p-2"
          >
            Add
          </button>
        )}
      </div>
      <div className="flex">
        <div className="w-1/2">
          <ul>
            {links.map((link) => (
              <li
                key={link.id}
                className="border p-2 mb-2 flex justify-between items-center"
              >
                <div>
                  <span className="font-bold">{link.platform}: </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {link.url}
                  </a>
                </div>
                <div>
                  <button
                    onClick={() => handleEditLink(link)}
                    className="bg-green-500 text-white p-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteLink(link.id)}
                    className="bg-red-500 text-white p-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-300 p-4 rounded-md w-[375px] h-[667px]">
            <h2 className="text-center text-xl font-bold mb-4">Phone Mockup</h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id} className="bg-white p-2 rounded shadow">
                  <span className="font-bold">{link.platform}: </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkManager;
