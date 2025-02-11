import React from 'react';
import './Global.css';
import CopyableCodeBlock from '../components/CopyableCodeBlock';

const Basics = () => {
  const helloWorldCode = `#include <iostream> // Header file for input and output operations
using namespace std; // Namespace to avoid prefixing std::

int main() { // Main function where execution starts
    cout << "Hello, World!"; // Output statement
    return 0; // Indicating successful execution
}`;

  const ifElseCode = `if (age >= 18) { // Condition check
    cout << "Adult"; 
} else { // Alternate case
    cout << "Minor"; 
}`;

  const switchCaseCode = `switch (grade) {
    case 'A': cout << "Excellent"; break;
    case 'B': cout << "Good"; break;
    default: cout << "Try Harder"; break;
}`

  const forLoopCode = `for (int i = 0; i < 5; i++) { // Loop through 0 to 4
  cout << i << " "; 
}`;

  const whileLoopCode = `int i = 0; // Initialize counter
while (i < 5) { // Loop condition
    cout << i << " "; 
    i++; // Increment counter
}`;

  const doWhileLoopCode = `int i = 0; // Initialize counter
do { // Execute loop at least once
    cout << i << " "; 
    i++; // Increment counter
} while (i < 5); // Check loop condition
`;

  const functionsCode = `void greet() { // Function definition
    cout << "Hello, C++!"; 
}

int main() { // Function call
    greet(); 
    return 0; // Indicating success
}`;

  const compileCode = `g++ hello.cpp -o hello`;

  const executeCode = `./hello`;

  const variablesCode = `int age = 20; // Integer variable
double pi = 3.14; // Floating point variable
char grade = 'A'; // Character variable
bool isPassed = true; // Boolean variable`;

  const arrayCode = `int numbers[] = {1, 2, 3, 4, 5}; // Array initialization
cout << numbers[0]; // Output: 1`;

  const stringCode = `string name = "Varun"; // String initialization
cout << name;`;


  // Add similar variables for other code blocks...

  return (
    <div className="basics-page">
      <h1 className="text-center mb-5">Basics of C++</h1>
      {/* Added Sub-Main Heading */}
      <h2
        className="ml-3 mb-5"
        style={{ fontSize: '2rem', fontWeight: '700'}}
      >
        1. Introduction to C++
      </h2>
      <div className="container">
        {/* Introduction Section */}
        <section className="mb-5">
          <h2>What is C++?</h2>
          <p>
            C++ is a general-purpose, high-level programming language that extends the C programming language by adding object-oriented programming (OOP) features. It was developed by Bjarne Stroustrup at Bell Labs in 1979 and officially released in 1985. C++ allows developers to create efficient, fast, and scalable software and is widely used in system programming, game development, embedded systems, and high-performance applications.
          </p>

          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />

          <h2>Key Features of C++</h2>
          <ol>
            <li><b>Object-Oriented Programming (OOP)</b> – Supports classes, objects, inheritance, polymorphism, encapsulation, and abstraction.</li>
            <li><b>High Performance</b> – Compiled language for faster execution.</li>
            <li><b>Memory Management</b> – Supports both manual and automatic memory management.</li>
            <li><b>Multi-Paradigm</b> – Supports procedural, object-oriented, and generic programming.</li>
            <li><b>Platform Independence</b> – Can be compiled and executed on different platforms.</li>
            <li><b>Rich Standard Library (STL)</b> – Provides support for data structures, algorithms, and iterators.</li>
            <li><b>Low-Level Manipulation</b> – Enables direct hardware interaction using pointers.</li>
            <li><b>Exception Handling</b> – Provides mechanisms for graceful error handling.</li>
          </ol>

          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />

          <h2>Why Use C++?</h2>
          <ul>
            <li><b>Speed & Efficiency:</b> Faster than many high-level languages like Python and Java.</li>
            <li><b>Flexibility:</b> Used in both low-level and high-level programming.</li>
            <li><b>Industry Standard:</b> Widely adopted by major technology companies.</li>
          </ul>

          <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />
        </section>

        {/* Basic Structure of a C++ Program Section */}
        <section className="mb-5">
          <h2>Basic Structure of a C++ Program</h2>
          <p>
            A simple C++ program consists of header files, a main function, statements, and comments.
          </p>

          <h3>Example: Hello World in C++</h3>
          <CopyableCodeBlock code={helloWorldCode} language="cpp" />

          <h3>Explanation:</h3>
          <ol>
            <li><b>#include &lt;iostream&gt;</b> – Includes the input-output stream library for <code>cout</code> and <code>cin</code>.</li>
            <li><b>using namespace std;</b> – Allows using standard library functions without the <code>std::</code> prefix.</li>
            <li><b>int main()</b> – The entry point of the program.</li>
            <li><b>cout &lt;&lt; "Hello, World!";</b> – Prints text to the console.</li>
            <li><b>return 0;</b> – Indicates successful program termination.</li>
          </ol>
        </section>
        <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />

        {/* Compilation & Execution Process Section */}
        <section className="mb-5">
          <h2>Compilation & Execution Process</h2>
          <p>To run a C++ program, follow these steps:</p>
          <ol>
            <li><b>Write Code</b> – Save your program with a <code>.cpp</code> extension (e.g., <code>hello.cpp</code>).</li>
            <li><b>Compile</b> – Convert source code to machine code using a compiler (e.g., <code>g++</code> for GCC).</li>
          </ol>
          <CopyableCodeBlock code={compileCode} language="cpp" />
          <ol start="3">
            <li><b>Execute</b> – Run the compiled program.</li>
          </ol>
          <CopyableCodeBlock code={executeCode} language="cpp" />
        </section>
        <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />

        {/* Fundamental Concepts in C++ Section */}
        <section className="mb-5">
          <h2>Fundamental Concepts in C++</h2>

          {/* Variables & Data Types */}
          <h3>1. Variables & Data Types</h3>
          <p>Variables store data, and each variable has a type that defines its size and value range.</p>
          <p><b>Example:</b></p>
          <CopyableCodeBlock code={variablesCode} language="cpp" />

          <p><b>Common Data Types:</b></p>
          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Size</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code1>int</code1></td>
                <td>4 bytes</td>
                <td>Whole numbers</td>
              </tr>
              <tr>
                <td><code1>float</code1></td>
                <td>4 bytes</td>
                <td>Decimal numbers (less precision)</td>
              </tr>
              <tr>
                <td><code1>double</code1></td>
                <td>8 bytes</td>
                <td>Decimal numbers (more precision)</td>
              </tr>
              <tr>
                <td><code1>char</code1></td>
                <td>1 byte</td>
                <td>Single character</td>
              </tr>
              <tr>
                <td><code1>bool</code1></td>
                <td>1 byte</td>
                <td>True/false values</td>
              </tr>
              <tr>
                <td><code1>string</code1></td>
                <td>Variable</td>
                <td>Sequence of characters (C++11 onwards)</td>
              </tr>
            </tbody>
          </table>

          {/* Operators */}
          <h3>2. Operators</h3>
          <ul>
            <li><b>Arithmetic:</b> <code1>+ - * / %</code1></li>
            <li><b>Relational:</b> <code1>== != &lt; &gt; &lt;= &gt;=</code1></li>
            <li><b>Logical:</b> <code1>&& || !</code1></li>
            <li><b>Bitwise:</b> <code1>&amp; | ^ &lt;&lt; &gt;&gt;</code1></li>
            <li><b>Assignment:</b> <code1>= += -= *= /= %=</code1></li>
          </ul>

          {/* Control Statements */}
          <h3>3. Control Statements</h3>
          <h4>If-Else</h4>
          <CopyableCodeBlock code={ifElseCode} language="cpp" />

          <h4>Switch Case</h4>
          <CopyableCodeBlock code={switchCaseCode} language="cpp" />

          <h4>Loops</h4>
          <p><b>For Loop:</b></p>
          <CopyableCodeBlock code={forLoopCode} language="cpp" />

          <p><b>While Loop:</b></p>
          <CopyableCodeBlock code={whileLoopCode} language="cpp" />

          <p><b>Do-While Loop:</b></p>
          <CopyableCodeBlock code={doWhileLoopCode} language="cpp" />

          {/* Functions */}
          <h3>4. Functions</h3>
          <p>A function is a block of code that performs a specific task.</p>
          <CopyableCodeBlock code={functionsCode} language="cpp" />
          

          {/* Arrays & Strings */}
          <h3>5. Arrays & Strings</h3>
          <p><b>Array:</b></p>
          <CopyableCodeBlock code={arrayCode} language="cpp" />

          <p><b>String:</b></p>
          <CopyableCodeBlock code={stringCode} language="cpp" />
        </section>
        <hr style={{ borderTop: '3px solid', margin: '2rem 0' }} />

        {/* Conclusion Section */}
        <section className="mb-5">
          <h2>Conclusion</h2>
          <p>
            C++ is a powerful language that blends low-level and high-level features, making it suitable for various applications. Its <b>object-oriented, procedural, and generic programming support</b> makes it widely used in industries like gaming, finance, and system programming.
          </p>
          <p>
            Understanding the <b>basics of C++</b> including syntax, data types, control structures, functions, and memory management is crucial before moving to advanced concepts like <b>OOP, file handling, and multi-threading</b>.
          </p>
        </section>

        {/* Navigation Links */}
        <div className="text-center mt-5">
          <a href="/advanced" className="btn btn-primary">Next: Advanced Topics</a>
        </div>
      </div>
    </div>
  );
};

export default Basics;