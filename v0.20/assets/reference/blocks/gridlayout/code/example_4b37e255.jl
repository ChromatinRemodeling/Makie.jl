# This file was generated, do not modify it. # hide
using Makie.LaTeXStrings: @L_str                       # hide
__result = begin                                       # hide
    using CairoMakie

f = Figure()

Axis(f[1, 1:2], title = "[1, 1:2]")
Axis(f[2:4, 1:2], title = "[2:4, 1:2]")
Axis(f[:, 3], title = "[:, 3]")
Axis(f[1:3, 4], title = "[1:3, 4]")
Axis(f[end, end], title = "[end, end]")

f
end                                                    # hide
sz = size(Makie.parent_scene(__result))                # hide
open(joinpath(@OUTPUT, "example_4b37e255_size.txt"), "w") do io # hide
    print(io, sz[1], " ", sz[2])                       # hide
end                                                    # hide
save(joinpath(@OUTPUT, "example_4b37e255.png"), __result; px_per_unit = 2, pt_per_unit = 0.75, ) # hide
save(joinpath(@OUTPUT, "example_4b37e255.svg"), __result; px_per_unit = 2, pt_per_unit = 0.75, ) # hide
nothing # hide