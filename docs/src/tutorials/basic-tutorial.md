# Getting started with Makie

## Preface

Here is a quick tutorial to get you started with Makie!

Makie is the name of the whole plotting ecosystem and `Makie.jl` is the main package that describes how plots work.
To actually render and save plots, we need a backend that knows how to translate plots into images or vector graphics.

There are three main backends which you can use to render plots (for more information, have a look at [What is a backend](@ref)):

- `CairoMakie.jl` if you want to render vector graphics or high quality 2D images and don't need interactivity or true 3D rendering.
- `GLMakie.jl` if you need interactive windows and true 3D rendering but no vector output.
- Or `WGLMakie.jl` which is similar to `GLMakie` but works in web browsers, not native windows.

This tutorial uses CairoMakie, but the code can be executed with any backend.
Note that CairoMakie can _create_ images but it cannot _display_ them.

To see the output of plotting commands when using CairoMakie, we recommend you either use an IDE which supports png or svg output, such as VSCode, Atom/Juno, Jupyter, Pluto, etc., or try using a viewer package such as [ElectronDisplay.jl](https://github.com/queryverse/ElectronDisplay.jl), or alternatively save your plots to files directly.
The Julia REPL by itself does not have the ability to show the plots.

Ok, now that this is out of the way, let's get started!

## Importing

First, we import CairoMakie. This makes all the exported symbols from `Makie.jl` available as well.

```@example basic
using CairoMakie
CairoMakie.activate!() # hide

nothing # hide
```

## Important objects

The objects most important for our first steps with Makie are the `Figure`, the `Axis` and plots.
In a normal Makie plot you will usually find a `Figure` which contains an `Axis` which contains one or more plot objects like `Lines` or `Scatter`.

In the next steps, we will take a look at how we can create these objects.

## An empty figure

The basic container object in Makie is the [`Figure`](@ref).
It is a canvas onto which we can add objects like `Axis`, `Colorbar`, `Legend` and others.

Let's create a `Figure` and give it a background color other than the default white so we can see it.
Returning a `Figure` from an expression will `display` it if your coding environment can show images.

```@figure basic
f = Figure(backgroundcolor = :tomato)
```

Another common thing to do is to give a figure a different size.
The default is 800x600, let's try halving the height:

```@figure basic
f = Figure(backgroundcolor = :tomato, size = (800, 300))
```

## Adding an Axis

The most common object you can add to a figure which you need for most plotting is the [Axis](@ref).
The usual syntax for adding such an object to a figure is to specify a position in the `Figure`'s layout as the first argument.
We'll learn more about layouts later, but for now the position `f[1, 1]` will just fill the whole figure.

```@figure basic
f = Figure()
ax = Axis(f[1, 1])
f
```

The default axis has no title or labels, you can pass those as keyword arguments.
For a whole list of available attributes, check the docstring for [`Axis`](@ref) (you can also do that by running `?Axis` in the REPL).
Be warned, it's very long!

```@figure basic
f = Figure()
ax = Axis(f[1, 1],
    title = "A Makie Axis",
    xlabel = "The x label",
    ylabel = "The y label"
)
f
```

## Adding a plot to an Axis

Now we're ready to actually plot something into an `Axis`!

Makie has many different plotting functions, the first we will learn about is [`lines!`](@ref).
Let's try plotting a sine function into an `Axis`, by passing it as the first argument:

```@figure basic
f = Figure()
ax = Axis(f[1, 1])
x = range(0, 10, length=100)
y = sin.(x)
lines!(ax, x, y)
f
```

There we have our first line plot.

## Scatter plot

Another common function is [`scatter!`](@ref).
It works very similar to [`lines!`](@ref) but shows separate markers for each input point.

```@figure basic
f = Figure()
ax = Axis(f[1, 1])
x = range(0, 10, length=100)
y = sin.(x)
scatter!(ax, x, y)
f
```

## Creating Figure, Axis and plot in one call

So far we have seen how to plot into an existing `Axis` with `lines!` and `scatter!`.

However, it would be nice if we didn't have to explicitly create `Figure` and `Axis` for every plot that we're making.

That's why every plotting function comes in a pair, one version that plots into an existing `Axis` and one that creates its own `Axis` implicitly for convenience.
For example, `lines!` mutates an existing `Axis`, `lines` creates an implicit one, `scatter!` mutates, `scatter` does not, and so on.

Let's see how to make a line plot without creating `Figure` and `Axis` ourselves first.

```@figure basic
x = range(0, 10, length=100)
y = sin.(x)
lines(x, y)
```

The return type of `lines(x, y)` is `FigureAxisPlot`.
The `lines` function first creates a `Figure`, then puts an `Axis` into it and finally adds a plot of type `Lines` to that axis.

Because these three objects are created at once, the function returns all three, just bundled up into one `FigureAxisPlot` object.
That's just so we can overload the `display` behavior for that type to match `Figure`.
Normally, multiple return values are returned as `Tuple`s in Julia but it's uncommon to overload `display` for `Tuple` types.

If you need the objects, for example to add more things to the figure later and edit axis and plot attributes, you could destructure the return value:

```@figure basic
figure, axis, lineplot = lines(x, y)
figure
```

As you can see, the output of returning the extracted figure is the same.

## Passing Figure and Axis styles

You might wonder how to specify a different resolution for this scatter plot, or set an axis title and labels.
Because a normal plotting function like `lines` or `scatter` creates these objects before it creates the plot, you can pass special keyword arguments to it called `axis` and `figure`.
You can pass any kind of object with symbol-value pairs and these will be used as keyword arguments for `Figure` and `Axis`, respectively.

```@figure basic
x = range(0, 10, length=100)
y = sin.(x)
scatter(x, y;
    figure = (; size = (400, 400)),
    axis = (; title = "Scatter plot", xlabel = "x label")
)
```

The `;` in `(; size = (400, 400))` is nothing special, it just clarifies that we want a one-element `NamedTuple` and not a variable called `size`.
It's good habit to include it but it's not needed for `NamedTuple`s with more than one entry.

## Argument conversions

So far we have called `lines` and `scatter` with `x` and `y` arguments, where `x` was a range object and `y` vector of numbers.
Most plotting functions have different options how you can call them.
The input arguments are converted internally to one or more target representations that can be handled by the rendering backends.

Here are a few different examples of what you can use with `lines`:

An interval and a function:

```@figure basic
lines(0..10, sin)
```

A collection of numbers and a function:

```@figure basic
lines(0:1:10, cos)
```

A collection of `Point`s from `GeometryBasics.jl` (which supplies most geometric primitives in Makie):

```@figure basic
lines([Point(0, 0), Point(5, 10), Point(10, 5)])
```

The input arguments you can use with `lines` and `scatter` are mostly the same because they have the same conversion trait `PointBased`.
Other plotting functions have different conversion traits, [heatmap](@ref) for example expects two-dimensional grid data.
The respective trait is called `CellGrid`.

## Layering multiple plots

As we've seen above, every plotting function has a version with and one without `!` at the end.
For example, there's `scatter` and `scatter!`, `lines` and `lines!`, etc.

To plot two things into the same axis, you can use the mutating plotting functions like `lines!` and `scatter!`.
For example, here's how you could plot two lines on top of each other:

```@figure basic
x = range(0, 10, length=100)

f, ax, l1 = lines(x, sin)
l2 = lines!(ax, x, cos)
f
```

The second `lines!` call plots into the axis created by the first `lines` call.
It's colored differently because the `Axis` keeps track of what has been plotted into it and cycles colors for similar plotting functions.

You can also leave out the axis argument for convenience, then the axis being used is the `current_axis()`, which is usually just the axis that was created last.

```@figure basic
x = range(0, 10, length=100)

f, ax, l1 = lines(x, sin)
lines!(x, cos)
f
```

Note that you cannot pass `figure` and `axis` keywords to mutating plotting functions like `lines!` or `scatter!`.
That's because they don't create an `Figure` and `Axis`, and we chose not to allow modification of the existing objects in plotting calls so it's clearer what is going on.

## Attributes

Every plotting function has attributes which you can set through keyword arguments.
The lines in the previous example have colors from Makie's default palette, but we can easily specify our own.

There are multiple ways you can specify colors, but common ones are:

- By name, like `:red` or `"red"`
- By hex string, like `"#ffccbk"`
- With color types like the Makie-exported `RGBf(0.5, 0, 0.6)` or `RGBAf(0.3, 0.8, 0.2, 0.8)`
- As a tuple where the first part is a color and the second an alpha value to make it transparent, like `(:red, 0.5)`

You can read more about colors at [juliagraphics.github.io/Colors.jl](https://juliagraphics.github.io/Colors.jl).

Here's a plot with one named color and one where we use `RGBf`:

```@figure basic
x = range(0, 10, length=100)

f, ax, l1 = lines(x, sin, color = :tomato)
l2 = lines!(ax, x, cos, color = RGBf(0.2, 0.7, 0.9))
f
```

Other plotting functions have different attributes.
The function `scatter`, for example, does not only have the `color` attribute, but also a `markersize` attribute.

You can read about all possible attributes by running `?scatter` in the REPL, and examples are shown on the page [scatter](@ref).

```@figure basic
x = range(0, 10, length=100)

f, ax, sc1 = scatter(x, sin, color = :red, markersize = 5)
sc2 = scatter!(ax, x, cos, color = :blue, markersize = 10)
f
```

You can also manipulate most plot attributes afterwards with the syntax `plot.attribute = new_value`.

```@figure basic
sc1.marker = :utriangle
sc1.markersize = 20

sc2.color = :transparent
sc2.markersize = 20
sc2.strokewidth = 1
sc2.strokecolor = :purple

f
```

## Array attributes

A lot of attributes can be set to either a single value or an array with as many elements as there are data points.
For example, it is usually much more performant to draw many points with one scatter object, than to create many scatter objects with one point each.

Here, we vary markersize and color:

```@figure basic
x = range(0, 10, length=100)

scatter(x, sin,
    markersize = range(5, 15, length=100),
    color = range(0, 1, length=100),
    colormap = :thermal
)
```

Note that the color array does not actually contain colors, rather the numerical values are mapped to the plot's `colormap`.
There are many different colormaps to choose from, take a look on the [Colors](@ref) page.

The values are mapped to colors via the `colorrange` attribute, which by default goes from the minimum to the maximum color value.
But we can also limit or expand the range manually.
For example, we can constrain the previous scatter plot's color range to (0.33, 0.66), which will clip the colors at the bottom and the top.

```@figure basic
x = range(0, 10, length=100)

scatter(x, sin,
    markersize = range(5, 15, length=100),
    color = range(0, 1, length=100),
    colormap = :thermal,
    colorrange = (0.33, 0.66)
)
```

Of course you can also use an array of colors directly, in which case the `colorrange` is ignored:

```@figure basic

using CairoMakie

x = range(0, 10, length=100)

colors = repeat([:crimson, :dodgerblue, :slateblue1, :sienna1, :orchid1], 20)

scatter(x, sin, color = colors, markersize = 20)
```

## Simple legend

If you add label attributes to your plots, you can call the `axislegend` function to add a `Legend` with all labeled plots to the current `Axis`, or optionally to one you pass as the first argument.

```@figure basic

using CairoMakie

x = range(0, 10, length=100)

lines(x, sin, color = :red, label = "sin")
lines!(x, cos, color = :blue, label = "cos")
axislegend()
current_figure()
```

## Subplots

Makie uses a powerful layout system under the hood, which allows you to create very complex figures with many subplots.
So far, we have only used the default position [1, 1], where the Axis is created in a standard plotting call.

We can make subplots by giving the location of the subplot in our layout grid as the first argument to our plotting function.
The basic syntax for specifying the location in a figure is `fig[row, col]`.

```@figure basic

using CairoMakie

x = LinRange(0, 10, 100)
y = sin.(x)

fig = Figure()
lines(fig[1, 1], x, y, color = :red)
lines(fig[1, 2], x, y, color = :blue)
lines(fig[2, 1:2], x, y, color = :green)

fig
```

Each `lines` call creates a new axis in the position given as the first argument, that's why we use `lines` and not `lines!` here.

We can also create a couple of axes manually at first and then plot into them later.
For example, we can create a figure with three axes.

```@figure basic

using CairoMakie

fig = Figure()
ax1 = Axis(fig[1, 1])
ax2 = Axis(fig[1, 2])
ax3 = Axis(fig[2, 1:2])
fig
```

And then we can continue to plot into these empty axes.

```@figure basic

lines!(ax1, 0..10, sin)
lines!(ax2, 0..10, cos)
lines!(ax3, 0..10, sqrt)
fig
```

## Legend and Colorbar

We have seen two `Blocks` so far, the [Axis](@ref) and the [Legend](@ref) which was created by the function `axislegend`.
All `Block`s can be placed into the layout of a figure at arbitrary positions, which makes it easy to assemble complex figures.

In the same way as with the [Axis](@ref) before, you can also create a [Legend](@ref) manually and then place it freely, wherever you want, in the figure.
There are multiple ways to create [Legend](@ref)s, for one of them you pass one vector of plot objects and one vector of label strings.

You can see here that we can deconstruct the return value from the two `lines` calls into one newly created axis and one plot object each.
We can then feed the plot objects to the legend constructor.
We place the legend in the second column and across both rows, which centers it nicely next to the two axes.

```@figure basic

using CairoMakie

fig = Figure()
ax1, l1 = lines(fig[1, 1], 0..10, sin, color = :red)
ax2, l2 = lines(fig[2, 1], 0..10, cos, color = :blue)
Legend(fig[1:2, 2], [l1, l2], ["sin", "cos"])
fig
```

The [Colorbar](@ref) works in a very similar way.
We just need to pass a position in the figure to it, and one plot object.
In this example, we use a `heatmap`.

You can see here that we split the return value of `heatmap` into three parts: the newly created figure, the axis and the heatmap plot object.
This is useful as we can then continue with the figure `fig` and the heatmap `hm` which we need for the colorbar.

```@figure basic

using CairoMakie

fig, ax, hm = heatmap(randn(20, 20))
Colorbar(fig[1, 2], hm)
fig
```

The previous short syntax is basically equivalent to this longer, manual version.
You can switch between those workflows however you please.

```@figure basic

using CairoMakie

fig = Figure()
ax = Axis(fig[1, 1])
hm = heatmap!(ax, randn(20, 20))
Colorbar(fig[1, 2], hm)
fig
```

## Next steps

We've only looked at a small subset of Makie's functionality here.

If you want to learn about making complex figures with nested sublayouts, have a look at the tutorial [Creating complex layouts](@ref).

If you're interested in creating interactive visualizations that use Makie's special `Observables` workflow, this is explained in more detail in the [Observables](@ref) section.

If you want to create animated movies, you can find more information in the [Animations](@ref) section.
