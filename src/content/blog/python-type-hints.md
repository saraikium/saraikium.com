---
author: Saraikium
pubDatetime: 2023-12-04
title: Python type hints for TypeScript developers
postSlug: thoughts-about-python
featured: true
draft: true
tags:
  - Python
description: A deep dive into python type system
---

Having transitioned to Python from a JavaScript/TypeScript background a year ago,
I struggled with Python's type system, especially when tasked with maintaining a codebase devoid of type hints at my current job.
Initially, my inclination was towards TypeScript.

However, as I immersed myself in Python and its duck typing philosophy, I began to appreciate the language's simplicity and flexibility.
Unlike TypeScript, Python eliminates the need for an elaborate toolchain and avoids the overhead of transpilation, making it more straightforward and simple to use type hints.

So in this post, we'll explore the syntax, benefits, and best practices of incorporating type hints into your Python code, while drawing comparisons with TypeScript along the way.
By the end, you'll not only have a solid understanding of Python's approach to type checking but also appreciate the similarities and differences between these two powerful languages.

## Table of contents

## The basics

Let's start simple. The syntax is very close to TypeScript with a `:` after the variable name and the actual type after that.

```python
my_int: int = 69
my_float: float = 3.2
my_string: str   # If you try to use my_string before initialization, python will throw a NameError
```

Notice the `->` to annotate return type in Python instead of `:`. That's because python uses `:` to denote the start of the function block. Other than that, both are pretty similar.
