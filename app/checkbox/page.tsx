"use client";

import Link from "next/link";
import React from "react";

export default function CheckboxPage() {
  return (
    <div className="container mx-auto p-4 bg-gray-950 text-white min-h-screen grid grid-cols-[2fr_1fr] gap-5">
      <div>
      <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">Checkbox</h1>
            <p className="text-gray-400">A control that allows the user to toggle between checked and not checked.</p>
          </div>
          <div className="flex space-x-2">
            <Link href="/docs" className="text-gray-400 hover:text-white">Docs</Link>
            <Link href="/api-reference" className="text-gray-400 hover:text-white">API Reference</Link>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-0"
            />
            <label htmlFor="terms" className="text-white">
              Accept terms and conditions
            </label>
          </div>
        </div>

        <div className="mt-4 flex space-x-4">
          <select
            className="bg-gray-800 text-white p-2 rounded border border-gray-700 w-[180px] appearance-none"
            defaultValue="new-york"
          >
            <option value="new-york">Style: New York</option>
            <option value="london">Style: London</option>
            <option value="tokyo">Style: Tokyo</option>
          </select>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center">
            Open in UI
            <span className="ml-2">↗</span>
          </button>
        </div>

        <div className="mt-6 text-gray-400">
          <h3 className="text-lg font-semibold mb-2">Installation</h3>
          <div className="mb-4">
            <div className="flex space-x-4 mb-2">
              <span className="text-gray-500">CLI</span>
              <span className="text-gray-500">Manual</span>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-gray-200">pnpm pnpm yarn bun</code>
            </div>
            <div className="bg-gray-800 p-3 rounded mt-2">
              <code className="text-gray-200">npx shadcn@latest add checkbox</code>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 mt-6">Usage</h3>
          <div className="bg-gray-800 p-3 rounded">
            <code className="text-red-400">import  Checkbox  from @/components/ui/checkbox</code>
          </div>
   

          <h3 className="text-lg font-semibold mb-2 mt-6">Examples</h3>
          <div className="mb-4">
            <h4 className="text-md font-medium mb-2">With text</h4>
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                id="terms-example"
                className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-0"
              />
              <label htmlFor="terms-example" className="text-white">
                Accept terms and conditions
              </label>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center">
                Preview
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>

        <div className="mt-6 text-gray-400">
          <h3 className="text-lg font-semibold mb-2">On This Page</h3>
          <ul className="space-y-1">
            <li><a href="#installation" className="hover:text-white">Installation</a></li>
            <li><a href="#usage" className="hover:text-white">Usage</a></li>
            <li><a href="#examples" className="hover:text-white">Examples</a></li>
            <li><a href="#with-text" className="hover:text-white">With text</a></li>
            <li><a href="#disabled" className="hover:text-white">Disabled</a></li>
            <li><a href="#form" className="hover:text-white">Form</a></li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg text-gray-400 md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Deploy your shadcn/ui app on Vercel</h3>
          <p className="mb-2">Trusted by OpenAI, Sonos, Chick-fil-A, and more.</p>
          <p>Vercel provides tools and infrastructure to deploy apps and features at scale.</p>
          <button className="mt-2 bg-white text-black px-4 py-2 rounded">Deploy Now</button>
        </div>
      </div>
    </div>
  );
}