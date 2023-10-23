using Makie
using GLMakie, Test
using FileIO
using GeometryBasics
using GeometryBasics: origin
using Random
using ReferenceTests

if !GLMakie.ModernGL.enable_opengl_debugging
    # can't error, since we can't enable debugging for users
    @warn("TESTING WITHOUT OPENGL DEBUGGING")
end

GLMakie.activate!(framerate=1.0, scalefactor=1.0)

@testset "mimes" begin
    Makie.inline!(true)
    f, ax, pl = scatter(1:4)
    @test showable("image/png", f)
    @test showable("image/jpeg", f)
    # see https://github.com/MakieOrg/Makie.jl/pull/2167
    @test !showable("blaaa", f)
    Makie.inline!(false)
end

# run the unit test suite
include("unit_tests.jl")

@testset "Reference Tests" begin
    n_missing_images = 0
    @testset "refimages" begin
        ReferenceTests.mark_broken_tests()
        recorded_files, recording_dir = @include_reference_tests "refimages.jl"
        missing_images, scores = ReferenceTests.record_comparison(recording_dir)
        n_missing_images += length(missing_images)
        ReferenceTests.test_comparison(scores; threshold = 0.032)
    end

    @testset "glmakie_refimages" begin
        recorded_files, recording_dir = @include_reference_tests joinpath(@__DIR__, "glmakie_refimages.jl")
        missing_images, scores = ReferenceTests.record_comparison(recording_dir)
        n_missing_images += length(missing_images)
        ReferenceTests.test_comparison(scores; threshold = 0.01)
    end
    GLMakie.closeall()
    GC.gc(true) # make sure no finalizers act up!
    # pass on status for Github Actions
    println("::set-output name=n_missing_refimages::$n_missing_images")
end
