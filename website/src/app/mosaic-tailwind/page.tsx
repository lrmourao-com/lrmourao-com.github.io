export default function MosaicTailwindPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Tailwind CSS Mosaic
        </h1>
        <p className="text-center text-gray-600">
          A flexbox-based mosaic layout with equal-height columns and items that grow to fill space - built entirely with Tailwind CSS.
        </p>
      </div>

      {/* Mosaic Container */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto my-8 p-4 border-[3px] border-gray-800 bg-gray-100">
        {/* Column 1 */}
        <div className="flex flex-col flex-1 gap-4">
          {/* Item 1 */}
          <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a euismod
            ante. Vestibulum tortor ipsum, maximus eu porttitor non, tempus at tellus.
            Nunc eu dolor lacinia felis blandit luctus nec eu ex. Sed dapibus id nibh
            ac bibendum. Aliquam eu mattis arcu, sed tincidunt tellus. Donec porttitor
            vel metus vel porta. Duis pharetra vel est nec semper. Cras non elit ante.
            Nulla viverra aliquam bibendum. In convallis, ex euismod laoreet
            convallis, turpis libero viverra tellus, vel viverra lacus tellus
            venenatis purus. Maecenas porta sem in ipsum cursus mollis. Aliquam ornare
            efficitur lectus nec semper. Aenean semper sem quis dolor ullamcorper
            aliquam. Fusce eget nisi vitae orci porta mattis eget non nunc. Aenean
            nibh sem, pretium sed risus id, accumsan elementum sem. Vivamus et tortor
            risus. Vestibulum sit amet dictum est, nec commodo nisi. In a ante a quam
            mattis bibendum ut et libero. Phasellus vel sodales nisi. Morbi a eros
            pretium, tristique massa ut, mollis ante. Suspendisse id congue ex.
            Aliquam ultrices fermentum nisi, vitae ullamcorper est semper vitae. Nunc
            sollicitudin lectus odio, eget ornare justo porta sed. Phasellus aliquet
            arcu eu dapibus dapibus. Curabitur scelerisque ut lorem nec porttitor.
          </div>
          
          {/* Item 2 */}
          <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a euismod
            ante. Vestibulum tortor ipsum, maximus eu porttitor non, tempus at tellus.
            Nunc eu dolor lacinia felis blandit luctus nec eu ex. Sed dapibus id nibh
            ac bibendum. Aliquam eu mattis arcu, sed tincidunt tellus. Donec porttitor
            vel metus vel porta. Duis pharetra vel est nec semper. Cras non elit ante.
            Nulla viverra aliquam bibendum. In convallis, ex euismod laoreet
            convallis, turpis libero viverra tellus, vel viverra lacus tellus
            venenatis purus. Maecenas porta sem in ipsum cursus mollis. Aliquam ornare
            efficitur lectus nec semper.
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col flex-1 gap-4">
          {/* Item 1 */}
          <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a euismod
            ante. Vestibulum tortor ipsum, maximus eu porttitor non, tempus at tellus.
            Nunc eu dolor lacinia felis blandit luctus nec eu ex. Sed dapibus id nibh
            ac bibendum. Aliquam eu mattis arcu, sed tincidunt tellus. Donec porttitor
            vel metus vel porta. Duis pharetra vel est nec semper. Cras non elit ante.
            Nulla viverra aliquam bibendum. In convallis, ex euismod laoreet
            convallis, turpis libero viverra tellus, vel viverra lacus tellus
            venenatis purus. Maecenas porta sem in ipsum cursus mollis. Aliquam ornare
            efficitur lectus nec semper. Aenean semper sem quis dolor ullamcorper
            aliquam. Fusce eget nisi vitae orci porta mattis eget non nunc. Aenean
            nibh sem, pretium sed risus id, accumsan elementum sem. Vivamus et tortor
            risus. Vestibulum sit amet dictum est, nec commodo nisi. In a ante a quam
            mattis bibendum ut et libero. Phasellus vel sodales nisi. Morbi a eros
            pretium, tristique massa ut, mollis ante. Suspendisse id congue ex.
            Aliquam ultrices fermentum nisi, vitae ullamcorper est semper vitae. Nunc
            sollicitudin lectus odio, eget ornare justo porta sed. Phasellus aliquet
            arcu eu dapibus dapibus. Curabitur scelerisque ut lorem nec porttitor.
            Aenean semper sem quis dolor ullamcorper aliquam. Fusce eget nisi vitae
            orci porta mattis eget non nunc. Aenean nibh sem, pretium sed risus id,
            accumsan elementum sem. Vivamus et tortor risus. Vestibulum sit amet
            dictum est, nec commodo nisi. In a ante a quam mattis bibendum ut et
            libero. Phasellus vel sodales nisi. Morbi a eros pretium, tristique massa
            ut, mollis ante. Suspendisse id congue ex. Aliquam ultrices fermentum
            nisi, vitae ullamcorper est semper vitae. Nunc sollicitudin lectus odio,
            eget ornare justo porta sed. Phasellus aliquet arcu eu dapibus dapibus.
            Curabitur scelerisque ut lorem nec porttitor.
          </div>
          
          {/* Item 2 */}
          <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a euismod
            ante. Vestibulum tortor ipsum, maximus eu porttitor non, tempus at tellus.
            Nunc eu dolor lacinia felis blandit luctus nec eu ex. Sed dapibus id nibh
            ac bibendum. Aliquam eu mattis arcu, sed tincidunt tellus. Donec porttitor
            vel metus vel porta. Duis pharetra vel est nec semper. Cras non elit ante.
            Nulla viverra aliquam bibendum. In convallis, ex euismod laoreet
            convallis, turpis libero viverra tellus, vel viverra lacus tellus
            venenatis purus. Maecenas porta sem in ipsum cursus mollis. Aliquam ornare
            efficitur lectus nec semper.
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tailwind Class Mapping</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-2">Mosaic Container:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">flex</code> = display: flex</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">flex-col sm:flex-row</code> = flex-direction: column (mobile) / row (desktop)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">gap-4</code> = gap: 1rem</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">max-w-3xl</code> = max-width: 48rem (800px)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">mx-auto</code> = margin: 0 auto</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">border-[3px] border-gray-800</code> = border: 3px solid #333</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">bg-gray-100</code> = background: #f9f9f9</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Columns:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">flex-1</code> = flex: 1 (equal width)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">flex flex-col</code> = display: flex; flex-direction: column</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">gap-4</code> = gap: 1rem (space between items)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Items:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">flex-1</code> = flex: 1 (grow to fill space)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">flex items-center</code> = display: flex; align-items: center</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">bg-white</code> = background: #fff</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">p-4</code> = padding: 1rem</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">border border-gray-300</code> = border: 1px solid #ddd</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">rounded</code> = border-radius: 0.25rem</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
            <p className="text-blue-900">
              <strong>Note:</strong> For top-aligned content instead of centered, replace <code className="bg-blue-100 px-2 py-1 rounded">items-center</code> with <code className="bg-blue-100 px-2 py-1 rounded">items-start</code> on the item divs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


      // {/* Mosaic Container */}
      // <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto my-8 p-4 border-[3px] border-gray-800 bg-gray-100">
      //   {/* Column 1 */}
      //   <div className="flex flex-col flex-1 gap-4">
      //     {/* Item 1 */}
      //     <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
      
      //     </div>
          
      //     {/* Item 2 */}
      //     <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
        
      //     </div>
      //   </div>

      //   {/* Column 2 */}
      //   <div className="flex flex-col flex-1 gap-4">
      //     {/* Item 1 */}
      //     <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
           
      //     </div>
          
      //     {/* Item 2 */}
      //     <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded">
           
      //     </div>
      //   </div>
      // </div>