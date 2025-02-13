import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Global.css';
import CopyableCodeBlock from '../../components/CopyableCodeBlock';

const BasicSyntax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const helloWorldProgram = `#include &lt;iostream&gt;  // Header file for input and output

using namespace std; // Using the standard namespace

int main() { // Main function: Entry point of the program
    cout << "Hello, World!" << endl; // Output statement
    return 0; // Indicates successful execution
}`;

  const singleLineComment = `// This is a single-line comment`;
  const multiLineComment = `/*
   This is a 
   multi-line comment
*/`;

  const variableDecl = `int age = 21;      // Declaring and initializing an integer variable
float pi = 3.14;   // Declaring and initializing a floating-point variable
char grade = 'A';  // Declaring and initializing a character
bool status = true; // Declaring a boolean variable`;

  const coutExample = `cout << "Welcome to C++!" << endl;`;

  const cinExample = `int num;
cout << "Enter a number: ";
cin >> num;  // Takes input from the user
cout << "You entered: " << num << endl;`;

  const constExample = `const float PI = 3.14159;`;

  const escapeSequenceExample = `cout << "Hello\\tWorld\\n"; //Output: Hello   World`;

  return (
    <div className="basics-page">
      <h2
        className="ml-3 mb-5"
        style={{ fontSize: '2rem', fontWeight: '700'}}
      >
        2. Basic Syntax
      </h2>
      <div className="container">
        {/* Introduction Text */}
        <section className="mb-5">
          <p>
            In this phase, you will learn about the fundamental syntax of C++, which includes how to write a simple C++ program, use comments, define variables, and understand the structure of a C++ program.
          </p>
        </section>

        {/* 1. Structure of a Basic C++ Program */}
        <section className="mb-5">
          <h2>Structure of a Basic C++ Program</h2>
          <p>
            Every C++ program follows a specific structure. Here’s a simple "Hello, World!" program:
          </p>
          <CopyableCodeBlock code={helloWorldProgram} language="cpp" />
          <h3>Explanation of the Code</h3>
          <ol>
            <li>
              <code1>#include &lt;iostream&gt;</code1> – This is a <b>preprocessor directive</b> that includes the <b>iostream</b> library, which allows input and output operations (<code>cin</code>, <code>cout</code>).
            </li>
            <li>
              <code1>using namespace std;</code1> – This allows us to use names from the <b>standard library</b> (like <code>cout</code>, <code>cin</code>, <code>endl</code>) without prefixing them with <code>std::</code>.
            </li>
            <li>
              <code1>int main()</code1> – This is the <b>main function</b>, where the execution of the program starts.
            </li>
            <li>
              <code1>cout &lt;&lt; "Hello, World!" &lt;&lt; endl;</code1> – This prints the text "Hello, World!" to the console.
            </li>
            <li>
              <code1>return 0;</code1> – This indicates that the program executed successfully.
            </li>
          </ol>
          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* 2. Comments in C++ */}
        <section className="mb-5">
          <h2>Comments in C++</h2>
          <p>Comments are ignored by the compiler and are used for documentation.</p>
          <h3>Single-line comment:</h3>
          <CopyableCodeBlock code={singleLineComment} language="cpp" />
          <h3>Multi-line comment:</h3>
          <CopyableCodeBlock code={multiLineComment} language="cpp" />
          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* 3. Variables and Data Types */}
        <section className="mb-5">
          <h2>Variables and Data Types</h2>
          <p>
            A <b>variable</b> is a name given to a storage location in memory. It must have a <b>data type</b> that defines what kind of value it can store.
          </p>
          <h3>Basic Data Types in C++</h3>
          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Size (Approx)</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>int</td>
                <td>4 bytes</td>
                <td><code>int a = 10;</code></td>
              </tr>
              <tr>
                <td>float</td>
                <td>4 bytes</td>
                <td><code>float pi = 3.14;</code></td>
              </tr>
              <tr>
                <td>double</td>
                <td>8 bytes</td>
                <td><code>double num = 9.81;</code></td>
              </tr>
              <tr>
                <td>char</td>
                <td>1 byte</td>
                <td><code>char letter = 'A';</code></td>
              </tr>
              <tr>
                <td>bool</td>
                <td>1 byte</td>
                <td><code>bool isTrue = true;</code></td>
              </tr>
            </tbody>
          </table>
          <h3>Variable Declaration and Initialization</h3>
          <CopyableCodeBlock code={variableDecl} language="cpp" />
          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* 4. Input and Output in C++ */}
        <section className="mb-5">
          <h2>Input and Output in C++</h2>
          <p>
            C++ provides <strong>cin</strong> (for input) and <strong>cout</strong> (for output) for user interaction.
          </p>
          <h3>Using <code>cout</code> for Output</h3>
          <CopyableCodeBlock code={coutExample} language="cpp" />
          <ul>
            <li><code1>cout</code1> is used to display output.</li>
            <li><code1>endl</code1> moves the cursor to the next line.</li>
          </ul>
          <h3>Using <code>cin</code> for Input</h3>
          <CopyableCodeBlock code={cinExample} language="cpp" />
          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* 5. Constants in C++ */}
        <section className="mb-5">
          <h2>Constants in C++</h2>
          <p>Constants are fixed values that cannot be changed during program execution.</p>
          <h3>Using <code>const</code> Keyword</h3>
          <CopyableCodeBlock code={constExample} language="cpp" />
          <ul>
            <li><code1>const</code1> makes the variable <strong>read-only</strong>.</li>
          </ul>
          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* 6. Escape Sequences */}
        <section className="mb-5">
          <h2>Escape Sequences</h2>
          <p>Escape sequences are special character combinations used in strings.</p>
          <table>
            <thead>
              <tr>
                <th>Escape Sequence</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>\n</code></td>
                <td>New line</td>
              </tr>
              <tr>
                <td><code>\t</code></td>
                <td>Tab space</td>
              </tr>
              <tr>
                <td><code>\\</code></td>
                <td>Backslash</td>
              </tr>
              <tr>
                <td><code>\"</code></td>
                <td>Double quote</td>
              </tr>
            </tbody>
          </table>
          <h3>Example</h3>
          <CopyableCodeBlock code={`cout << "Hello\\tWorld\\n";`} language="cpp" />
          <p><strong>Output:</strong></p>
          <pre>Hello   World</pre>
          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* Summary */}
        <section className="mb-5">
          <h2>Summary</h2>
          <ul>
            <li>A C++ program consists of headers, a <code>main()</code> function, and statements.</li>
            <li>Comments (<code>//</code> for single-line and <code>/* */</code> for multi-line) improve readability.</li>
            <li>Variables store data and have specific data types.</li>
            <li>Use <code>cout</code> for output and <code>cin</code> for input.</li>
            <li>Constants prevent modification of values.</li>
            <li>Escape sequences help format output.</li>
          </ul>
        </section>

        {/* Navigation Links */}
        <div className="text-center mt-5">
          <Link to="/Basics_Of_C++/Operators" className="btn btn-primary">
            Next: Operators
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasicSyntax;